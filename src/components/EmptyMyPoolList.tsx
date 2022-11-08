import { Row, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native";

interface Props {
  code: string;
  onShare: () => void;
}

export function EmptyMyPoolList({ code, onShare }: Props) {
  return (
    <Row flexWrap="wrap" justifyContent="center">
      <Text color="gray.200" fontSize="sm" textAlign="center">
        {`Esse bolão ainda não tem participantes, que 
tal `}
        <TouchableWithoutFeedback onPress={onShare}>
          <Text textDecorationLine="underline" fontSize="sm" color="yellow.500">
            compartilhar o código
          </Text>
        </TouchableWithoutFeedback>
        {` do bolão com 
alguém? Use o código `}
        <Text
          color="gray.200"
          fontSize="sm"
          textAlign="center"
          fontFamily="heading"
        >
          {code}
        </Text>
      </Text>
    </Row>
  );
}
