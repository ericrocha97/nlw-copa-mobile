import { useNavigation } from "@react-navigation/native";
import { Row, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native";

export function EmptyPoolList() {
  const { navigate } = useNavigation();

  return (
    <Row flexWrap="wrap" justifyContent="center">
      <Text color="white" fontSize="sm" textAlign="center">
        {`Você ainda não está participando de 
nenhum bolão, que tal `}

        <TouchableWithoutFeedback onPress={() => navigate("find")}>
          <Text textDecorationLine="underline" fontSize="sm" color="yellow.500">
            buscar um por código
          </Text>
        </TouchableWithoutFeedback>

        {` 
ou `}

        <TouchableWithoutFeedback onPress={() => navigate("new")}>
          <Text textDecorationLine="underline" fontSize="sm" color="yellow.500">
            criar um novo
          </Text>
        </TouchableWithoutFeedback>

        {`?`}
      </Text>
    </Row>
  );
}
