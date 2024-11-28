export let assistantId = "asst_Z92cti2RIKPWyLxuEEPnwZwG"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
