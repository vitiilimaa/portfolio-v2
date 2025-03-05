import { createListCollection, SelectRootProps } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@portfolio/components/ui/select";

type SelectProps = Omit<SelectRootProps, "collection" | "value"> & {
  options: { label: string; value: string }[];
  value: string;
};
const Select = (props: SelectProps) => {
  const { options, value, ...selectProps } = props;

  const collection = createListCollection({ items: options });

  const currentValue =
    options.find((option) => option.value === value)?.value || "";

  return (
    <SelectRoot
      value={[currentValue]}
      _focus={{ outline: "none" }}
      {...selectProps}
      collection={collection}
    >
      <SelectTrigger>
        <SelectValueText
          width={"78px"}
          fontWeight={"bold"}
          textOverflow={"unset"}
          placeholder="PT-BR"
          fontSize={"18px"}
        />
      </SelectTrigger>
      <SelectContent p={0} zIndex={9999}>
        {options.map((option) => (
          <SelectItem
            borderRadius={"none"}
            p={3}
            fontSize={"18px"}
            item={option}
            key={option.value}
            _hover={{
              backgroundColor: "primary",
              color: "primaryText",
            }}
            _active={{
              backgroundColor: "primary",
              color: "primaryText",
            }}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default Select;
