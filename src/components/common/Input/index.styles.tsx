import styled from "@emotion/styled";
import { GREY, MUSTARD, WHITE, BLACK } from "../../../constants/colors";

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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div<{
  color: ColorScheme;
  labelType: LabelType;
  size: number;
}>`
  ${({ color, labelType, size }) => `
      input, label {color: ${{ light: BLACK, dark: WHITE }[color]}}
      label {
        display: ${{ hidden: "none", default: "initial" }[labelType]};
      }
      input {
        border: ${
          {
            light: `0.15rem solid ${GREY[400]}`,
            dark: `0.15rem solid ${GREY[700]}`,
          }[color]
        };
            background-color: ${{ light: WHITE, dark: GREY[900] }[color]};
            width: ${size}ch
      }
      `}
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const LabelWrapper = styled.label`
  font-weight: bold;
  font-size: 1.7rem;
`;

const InputWrapper = styled.input`
  font-size: 1.7rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline-color: ${MUSTARD};
`;

export { Container, LabelWrapper, InputWrapper };
