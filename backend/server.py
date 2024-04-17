from flask import Flask, render_template, request
import subprocess
import sys

app = Flask(__name__)
IMAGE_PATH="TEST_IMAGES/"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_script', methods=['POST'])
def run_script():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file uploaded.'
        
        file = request.files['file']
        # print(file)
        # Check if file is empty
        if file.filename == '':
            return 'No file selected.'
        
        # Save the uploaded file
        file.save(f"{IMAGE_PATH}test_image.jpg")
        result = subprocess.Popen(['python', 'C:/Users/DELL/Documents/VS/PhotoPhrase/backend/generate_caption.py'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        # process = subprocess.Popen(['python', 'C:/Users/DELL/Documents/VS/MACHINELEARNING/image-captioning-app/backend/generate_caption.py',file.filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = result.communicate()
        # print(stderr,file=sys.stderr)
        output = stdout.decode('utf-8')
        return render_template('index.html', output=output)
    return 'Method not allowed.'

if __name__ == '__main__':
    app.run(debug=True)
