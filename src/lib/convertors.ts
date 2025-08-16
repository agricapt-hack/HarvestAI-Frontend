const convertGamifyConversations = (input) => {
  const preamble = input.preamble || "";
  const flow_description = input.flow_description || "";

  const conversations = input.slides.flatMap(slide =>
    slide.conversations.map(
      convo => ({"speaker": `${convo.speaker}`, "message": `${convo.message}`})
    )
  );

  const flow_steps = input.flow_steps.map(step => ({
    id: step.id,
    title: step.title,
    description: step.description
  }));

  return {
    preamble,
    conversations,
    flow_steps,
    flow_description
  };
}

export { convertGamifyConversations };