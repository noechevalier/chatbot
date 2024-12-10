export let assistantId = "asst_ru5f8TVbYsB8SCyKbb1Engyq"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
