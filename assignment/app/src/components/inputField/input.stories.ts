import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./input";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    helperText: { control: "text" },
    errorMessage: { control: "text" },
    variant: { control: "radio", options: ["filled", "outlined", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
} as Meta<typeof InputField>;

type Template = StoryObj<typeof InputField>;

export const Default: Template = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    disabled: false,
    invalid: false,
    helperText: "This is your username",
    errorMessage: "Username is required",
    variant: "filled",
    size: "md",
  },
};
