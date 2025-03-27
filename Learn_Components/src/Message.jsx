function Message({ message }) {
  if (!message) {
    return <h1>Message is not available</h1>;
  } else {
    return <h1>{message}</h1>;
  }
}

export default Message;
