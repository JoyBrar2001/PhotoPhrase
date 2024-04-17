from pickle import load
from numpy import argmax
import argparse
import os
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.vgg16 import preprocess_input
from tensorflow.keras.models import Model
from keras.models import load_model
import cv2

def extract_features(filename):
	model = VGG16()
	model.layers.pop()
	model = Model(inputs=model.inputs, outputs=model.layers[-1].output)
	image = load_img(filename, target_size=(224, 224))
	image = img_to_array(image)
	image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
	image = preprocess_input(image)
	feature = model.predict(image, verbose=0)
	return feature

def word_for_id(integer, tokenizer):
	for word, index in tokenizer.word_index.items():
		if index == integer:
			return word
	return None

def generate_desc(model, tokenizer, photo, max_length):
	in_text = 'startseq'
	for i in range(max_length):
		sequence = tokenizer.texts_to_sequences([in_text])[0]
		sequence = pad_sequences([sequence], maxlen=max_length)
		yhat = model.predict([photo,sequence], verbose=0)
		yhat = argmax(yhat)
		word = word_for_id(yhat, tokenizer)
		if word is None:
			break
		in_text += ' ' + word
		if word == 'endseq':
			break
	return in_text

def generate_captions(MODEL,photo_path):
		# print("Generating Caption...")
		tokenizer = load(open('tokenizer.pkl', 'rb'))
		max_length = 34
		model = load_model(MODEL)
		photo = extract_features(photo_path)
		# print(photo)
		description = generate_desc(model, tokenizer, photo, max_length)
		description = description[9:-6]
		return description


MODEL_PATH="Models/model_100.h5"
IMAGE_PATH="TEST_IMAGES/"
IMAGE_NO="test_image.jpg"
# for i in os.listdir(IMAGE_PATH):
# 	print(generate_captions(f"{IMAGE_PATH}{i}"))
# image_dis=cv2.imread(f"{IMAGE_PATH}{IMAGE_NO}")
# image_dis=cv2.resize(image_dis,(1000,600))
# cv2.imshow('image',image_dis)
# cv2.waitKey(0)
# print("*\t*\t*\t*\t*\t*\t*\t*\t*\t*\t*\t\n")
print(generate_captions(MODEL_PATH,f"{IMAGE_PATH}{IMAGE_NO}"))
# print("\n*\t*\t*\t*\t*\t*\t*\t*\t*\t*\t*\t")