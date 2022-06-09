import styled from "@emotion/styled";

export default function () {
  return (
    <Wrapper>
      <h3>Create previous layout - USING FLEXBOX</h3>
      <p>if screen width less than 480px - 4 sections will be on a column</p>
      <p>with the order: HEADER - LEFT SIDEBAR - RIGHT SIDEBAR - MAIN COLUMN</p>

      <header>Header</header>
      <sidebar>Left Sidebar</sidebar>
      <main>Main Column</main>
      <sidebar>Right Sidebar</sidebar>

      <hr />
    </Wrapper>
  );
}

// Code here
const Wrapper = styled.div`
  header {
    background: #f85a3e99;
  }
  sidebar {
    display: block;
    background: #fccb1899;
  }
  main {
    background: #43aa8b99;
  }
`;
