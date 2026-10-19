import Button from "./Button";

const Download = () => {
  return (
    <div className="container flex justify-center pb-10">
      <Button href="/AIProposal.docx" download>
        Download the Above AI Study Proposal
      </Button>
    </div>
  );
};

export default Download;
