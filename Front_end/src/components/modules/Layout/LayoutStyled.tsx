import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 428px;
  align-items: center;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  min-height: 926px;
  align-items: start;
  justify-content: flex-end;
`;

export { LayoutContainer, LayoutContent };
