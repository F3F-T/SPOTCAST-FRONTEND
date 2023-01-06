import styled from "@emotion/styled";
import { GREY, WHITE, BLACK, RED } from "../../../constants/colors";

export type LabelType = "default" | "hidden";
export type ColorScheme = "light" | "dark";

export interface InputProps {
  value: string;
  type: string;
  label: string;
  labelType?: LabelType;
  placeholder?: string;
  required?: boolean;
  size?: number;
  color?: ColorScheme;
  className?: string;
  isValid?: boolean;
  isTextarea?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div<{
  color: ColorScheme;
  labelType: LabelType;
  size: number;
  isValid: boolean;
  isTextarea: boolean;
}>`
  ${({ color, labelType, size, isValid }) => `
      input, label {color: ${{ light: BLACK, dark: WHITE }[color]}}
      label {
        display: ${{ hidden: "none", default: "initial" }[labelType]};
      }
      input, textarea {
        border: ${
          !isValid
            ? `0.15rem solid ${RED.DARK}`
            : {
                light: `0.15rem solid ${GREY[400]}`,
                dark: `0.15rem solid ${GREY[700]}`,
              }[color]
        };
            background-color: ${{ light: WHITE, dark: GREY[900] }[color]};
            width: ${size}rem
      }
     
      `}
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const LabelWrapper = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
`;

const InputWrapper = styled.input`
  font-weight: 300;
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: none;
`;

const TextAreaWrapper = styled.textarea`
  font-weight: 300;
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: none;
`;

export { Container, LabelWrapper, InputWrapper, TextAreaWrapper };
