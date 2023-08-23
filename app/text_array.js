function ParentComponent() {
  const textToPass = "Hello from Parent!";

  return (
    <div>
      <ChildComponent text={textToPass} />
    </div>
  );
}

export default ParentComponent;
