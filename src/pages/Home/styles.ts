import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;

  small {
    display: block;

    color: var(--white);
    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-align: center;
  }

  section:first-child {
    padding: 3.5rem 0 3rem;

    h2 {
      margin: 3.9rem 0 7.5rem;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: -0.02rem;
      text-align: center;
      line-height: 1.6em;
    }
  }

  section:not(:first-child) {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    .frameworks {
      margin: 3.5rem 0 4rem;

      small {
        margin-bottom: 1.5rem;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        img {
          margin: 0.8rem 1.2rem;
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    min-width: 200px;
    margin: 0.75rem;
  }
`;

export const SectionDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding-top: 2.75rem;

  p.description_one-col {
    max-width: 48rem;
    margin: 0 auto;
    text-align: center;
  }

  p {
    flex: 1;
    line-height: 1.6;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 961px) {
    & {
      flex-direction: row;
      flex-wrap: wrap;

      p + p {
        margin-left: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 960px) {
    p + p {
      margin-top: 1.6rem;
    }
  }
`;