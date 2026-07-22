
import "dotenv/config";
import { InferenceClient } from "@huggingface/inference";
import fs from "fs";

const hf = new InferenceClient(process.env.HUGGINGFACE_TOKEN);

async function embed() {
   const output = await hf.featureExtraction({
     inputs: "hello bro",
     model: "Qwen/Qwen3-Embedding-8B",
   });

   console.log(output);
}

async function translation() {
   const output = await hf.translation({
     inputs: "hello world",
     model: "google-t5/t5-base",
   });

   console.log(output);
}


async function answerQuestion() {
  const output = await hf.questionAnswering({
    model: "deepset/roberta-base-squad2",
    inputs: {
      context: "Im learning backhand shot in badminton",
      question: "What is backhand shot in badminton",
    },
  });
  console.log(output);
}

async function textToImageGeneration() {
  const output = await hf.textToImage({
    model: "black-forest-labs/FLUX.1-schnell",
    inputs: "a photo of an astronaut riding a horse",
  });
  console.log(output);

  //@ts-ignore
  const arrayBuffer = await output.arrayBuffer();
  
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync("astronaut.png", buffer);
  console.log("Image saved as astronaut.png!");
}
textToImageGeneration();