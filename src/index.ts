
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

embed();