
import "dotenv/config";
import { InferenceClient } from "@huggingface/inference";

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

answerQuestion();
