# script.py
import sys
import base64
import subprocess

def run_script(script_name):
  """Runs a Python script and prints its output."""
  process = subprocess.Popen(["python", script_name], stdout=subprocess.PIPE)
  output, _ = process.communicate()
  try:
    print(output.decode("utf-8"))
  except UnicodeDecodeError:
    print(output.decode("latin-1"))

def decode(encoded_image):
    data_uri = encoded_image
    base64_data = data_uri.split(",")[1]
    image_data = base64.b64decode(base64_data)
    with open("/TEST_IMAGES/test_image.jpg", "wb") as file:
        file.write(image_data)
    # print("Image saved as test_image.jpg")

if __name__ == "__main__":
    with open("image.txt",'r') as img_file:
        content=img_file.read()
    decode(content)
    run_script("./backend/generate_caption.py")
