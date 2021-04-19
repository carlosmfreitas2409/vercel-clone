import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.main`
  padding-bottom: 4.2rem;

  small {
    display: block;

    color: var(--white);
    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-align: center;
  }

  > section {
    width: 100%;
    max-width: 1048px;
    margin: 0 auto;
    padding: 0 1.6rem;

    &:first-child {
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

    &:not(:first-child) {
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

export const ShipSection = styled.div`
  display: flex;
  margin: 4.2rem 0;
  padding: 1.6rem 0;

  background: var(--black-800);
  border-top: 1px solid var(--gray-700);
  border-bottom: 1px solid var(--gray-700);

  div {
    border-right: 1px solid var(--gray-700);
    padding: 0 2.2rem;
    flex-grow: 1;
    text-align: center;

    &:last-child {
      border-right: none;
    }

    h2 {
      color: var(--white);
      font-size: calc(58px + 2 * ((100vw - 500px) / 1120));
      font-weight: bold;

      line-height: 1.14em;
      letter-spacing: -0.05em;
    }

    span {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
`;

export const TestimonialsSection = styled.div`
  .testimonials {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: calc(100vw - 48px);
    max-width: 1000px;
    margin: 3rem auto 0;

    img {
      height: 26px;
      filter: invert(1);
    }
  }
`;