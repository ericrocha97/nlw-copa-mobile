import { HStack } from "native-base";
import CountryFlag from "react-native-country-flag";

import { Input } from "./Input";

interface Props {
  point: number;
  code: string;
  position: "left" | "right";
  onChangeText: (value: string) => void;
}

export function Team({ code, position, onChangeText, point }: Props) {
  return (
    <HStack alignItems="center">
      {position === "left" && (
        <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
      )}

      <Input
        w={10}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={point === 0 ? "" : String(point)}
        isDisabled={point > 0}
      />

      {position === "right" && (
        <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
      )}
    </HStack>
  );
}
