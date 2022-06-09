import styled from "@emotion/styled";

export default function () {
  return (
    <Wrapper>
      <h3>Create layout as example in image below - USING GRID</h3>
      <p>Header width:100% - Header Height: 50px</p>
      <p>Sidebar width:100px (max-width: 30vw) - Sidebar Height: 300px</p>
      <p>main width: rest of screen with - main Height: 300px</p>
      <p>gap between main and sidebar: 20px</p>
      <img
        alt="css layouts"
        src="https://s3.amazonaws.com/noupe/img/css-layouts7.gif"
        data-pin-no-hover="true"
      />
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
