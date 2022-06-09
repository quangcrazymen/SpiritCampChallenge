import styled from "@emotion/styled";

export default function () {
  return (
    <Wrapper>
      <h3>Create layout like image below - USING FLEXBOX</h3>
      <p>Each row has maximum 3 items which meet four requirements</p>
      <p>first elements reach the container left side</p>
      <p>third elements reach the container right side</p>
      <p>
        the gap between element is <strong>EXACT 20PX</strong>
      </p>
      <p>
        the <strong>3n+1</strong> elements will locate below first one, the{" "}
        <strong>3n+2</strong> will locate below second one, the{" "}
        <strong>3n</strong> will locate below third one
      </p>

      <img src="https://prod-kitchko-s3.s3.ap-southeast-2.amazonaws.com/Screen%20Shot%202022-05-31%20at%202.33.18%20PM.png" />

      <div className="container">
        <div className="child">Child</div>
        <div className="child">Child</div>
        <div className="child">Child</div>
        <div className="child">Child</div>
        <div className="child">Child</div>
      </div>

      <hr />
    </Wrapper>
  );
}

// Code here
const Wrapper = styled.div`
  img {
    width: 600px;
    height: 80px;
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    background: rgba(100, 100, 100, 0.5);
  }

  .child {
    background: red;
    margin: 10px;
  }
`;
