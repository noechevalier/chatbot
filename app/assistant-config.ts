export let assistantId = "asst_3vOCxDzsE636eXWbtRKDrBaC"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
