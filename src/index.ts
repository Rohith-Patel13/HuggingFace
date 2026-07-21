
import "dotenv/config";
import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(process.env.HUGGINGFACE_TOKEN);

async function embed() {
   const output = await hf.featureExtraction({
     provider: "groq",
     inputs: "hello bro",
     model: "openai/gpt-oss-120b:groq",
   });
}

embed();