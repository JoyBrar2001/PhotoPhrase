// api/runPythonScript.ts
import { NextRequest, NextResponse } from "next/server";
import { spawn } from 'child_process';
import { writeFileSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const imageUrl = await request.body;
    // console.log("imageUrl:", imageUrl);

    let imageText = await new Response(imageUrl).text();
    // console.log(imageText)
    if (!imageUrl) {
      throw new Error("imageUrl is missing in request body");
    }

    await writeFileSync('./image.txt', imageText, 'utf-8');

    // Spawn the Python process with imageUrl as parameter
    const pythonProcess = spawn('python', ['script.py']);

    let output = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    output = output.slice(0,1).toUpperCase() + output.slice(1);

    return new Promise((resolve, reject) => {
      pythonProcess.on('error', (error) => {
        console.error('Error executing Python script:', error);
        reject(error);
      });

      pythonProcess.on('close', (code) => {
        // console.log("Processes closed with code : ", code)
        if (code === 0) {
          resolve(NextResponse.json({ message: output }));
        } else {
          reject(new Error(`Python script exited with code ${code}`));
        }
      });
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return;
  }
}
