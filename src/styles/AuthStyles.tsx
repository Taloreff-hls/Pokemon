import styled from "styled-components";
import LoginImg from "../assets/imgs/bg_yellow.png";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";
import { SPACING } from "../assets/constants/spacings";

export const StyledAuthenticator = styled.main`
  main {
    background-color: ${colors.neutrals[100]};
    font-size: 1.4rem;
  }

  .amplify-heading {
    font-size: 1.6rem;
    font-family: ${fonts.roboto};
    font-weight: 600;
  }

  .amplify-text {
    font-size: 1.4rem;
    font-family: ${fonts.roboto};
    font-weight: 400;
  }

  [data-amplify-authenticator] {
    height: 100vh;

    [data-amplify-container] {
      display: grid;
      grid-template-columns: minmax(200px, 1fr) 2fr;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 100vh;
      background-color: ${colors.primary[300]};

      .pokemon-logo {
        display: grid;
        place-items: center;
        padding: 1rem;
      }

      [data-amplify-router] {
        background: url(${LoginImg});
        background-size: cover;
        background-position: center;
        height: 100%;
        display: grid;
        place-items: center;
        background-color: ${colors.neutrals.white};

        > * {
          background-color: ${colors.neutrals.white};
        }
        .amplify-tabs {
          background-color: ${colors.neutrals.white};
          min-width: 425px;
          border: 1px solid ${colors.neutrals[100]};
          border-radius: ${SPACING[5]};
          
          .amplify-tabs__panel {
            padding: 0;
          }

          .amplify-tabs__list {
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: ${SPACING[5]};
            padding: ${SPACING[4]} 0;
          }

          .amplify-tabs__item {
            border: none;
            text-align: center;
            padding-inline: 1.5rem;
            padding-block-start: 1.5rem;
            font-size: 1.6rem;
            background-color: ${colors.neutrals.white};
            flex: 1;
            border-radius: ${SPACING[5]} ${SPACING[5]} 0 0;
            color: ${colors.greys[300]};
            padding: ${SPACING[4]} 0;

            &:hover {
              color: ${colors.primary[300]};
              cursor: pointer;
            }
          }

          .amplify-tabs__item--active {
            color: ${colors.primary[300]};
            border-bottom: ${SPACING[0]} solid ${colors.primary[300]};
          }
        }

        [data-amplify-form] {
          padding: 1.5rem;
          max-width: 500px;
          border-radius: 12px;

          fieldset {
            border: none;
            padding: 0;
            .amplify-visually-hidden {
              display: none;
            }

            .amplify-textfield {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          }

          .amplify-label {
            font-family: ${fonts.roboto};
            margin-bottom: 6px;
            font-size: 14px;
            color: ${colors.neutrals[400]};
          }

          .amplify-text--error + .amplify-field-group--horizontal  {
  height: ${SPACING[9]};
}



          .amplify-text--error, .amplify-alert__body {
            font-family: ${fonts.roboto};
            margin: 0;
              margin-bottom: ${SPACING[6]};
              font-size: 14px;
              color: ${colors.red[100]};
            }

          .amplify-alert__dismiss {
            display: none;
          }

          .amplify-input {
            width: 94.5%;
            outline: none;
            box-shadow: none;
            padding: 10px;
            margin-bottom: ${SPACING[7]};
            border: 1px solid #ccc;
            border-radius: ${SPACING[2]};
            font-size: 16px;
            border-color: ${colors.neutrals[800]}
            &:focus {
              border-style: none;
              outline-style: none;
              outline-offset: none;
              border: 1px solid ${colors.neutrals[400]};
            }
            &::placeholder {
              color: transparent;
            }
          }

          .amplify-field-group__outer-end{
            display: none;
          }

          .amplify-button--primary {
            width: 100%;
            border: none;
            padding: ${SPACING[5]} ${SPACING[6]};
            background-color: ${colors.primary[300]};
            font-weight: 400;
            font-family: ${fonts.roboto};
            font-size: ${SPACING[6]};
            color: ${colors.neutrals.white};
            border-radius: 4px;
            &:hover {
              cursor: pointer;
              background-color: ${colors.primary[400]};
              color: ${colors.neutrals.white};
            },
            &:active {
              background-color: ${colors.primary[500]};
              color: ${colors.neutrals.white};
            }
          }

          amplify-button.amplify-field-group__control[type="button"] {
            color: ${colors.primary[300]};
            font-weight: 400;
            font-size: 1rem;
              border: none;
              background-color: transparent;
              font-family: ${fonts.roboto};

              &:hover {
              cursor: pointer;
            }
          }

          .amplify-button--loading{
            display:none;
          }


          [data-amplify-footer] {
            margin-top: ${SPACING[7]};
            text-align: center;

            button {
            color: ${colors.primary[300]};
            font-weight: 400;
            font-size: 1.4rem;
              border: none;
              background-color: transparent;
              font-family: ${fonts.roboto};

              &:hover {
              cursor: pointer;
            }
            }
          }
        }

        [data-amplify-authenticator-confirmresetpassword] { 
          min-width: 50%;

          fieldset{

            .amplify-flex:nth-of-type(2):not(.amplify-textfield) {

              
              & .amplify-flex {
                display: flex;
                justify-content: center;

                & .amplify-button--link {
                  margin-top: ${SPACING[3]};
                  border: none;
                  background-color: transparent;
                  color: ${colors.primary[300]};
                  &:hover { cursor: pointer;}
                }
              }
            }
          }
        }
        }
          
        [data-amplify-authenticator-forgotpassword] {
          min-width: 50%;

          fieldset{

            .amplify-heading {
              font-family: ${fonts.roboto};
              font-weight: 400;
            }

            .amplify-flex:nth-of-type(2) {
              
              .amplify-flex {
                display: flex;
                justify-content: center;

                .amplify-button--link {
                  margin-top: ${SPACING[3]};
                  border: none;
                  background-color: transparent;
                  color: ${colors.primary[300]};
                  &:hover { cursor: pointer;}
                }
              }
            }
          }
        }

        [data-amplify-authenticator-confirmsignup] {

          button {
            margin: ${SPACING[3]} 0;
          }

          font-family: ${fonts.roboto};
          .amplify-field-group__control:not(.amplify-button--primary):not(.amplify-input) {

            display: block;
            margin: ${SPACING[3]} auto 0 auto;
            border: none;
            background-color: transparent;
            color: ${colors.primary[300]};
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
