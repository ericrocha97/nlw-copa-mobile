import { Button, HStack, Text, useTheme, VStack } from "native-base";
import { X, Check } from "phosphor-react-native";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import countries from "i18n-iso-countries";

import { Team } from "./Team";

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: Date;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
}

interface Props {
  data: GameProps;
  onGuessConfirm: () => void;
  setFirstTeamPoints: (value: string) => void;
  setSecondTeamPoints: (value: string) => void;
}

export function Game({
  data,
  setFirstTeamPoints,
  setSecondTeamPoints,
  onGuessConfirm,
}: Props) {
  const { colors, sizes } = useTheme();

  countries.registerLocale(require("i18n-iso-countries/langs/pt.json"));

  const when = dayjs(data.date)
    .locale(ptBR)
    .format("DD [de] MMMM [de] YYYY [às] HH:mm[h]");

  const disabled = new Date() >= new Date(data.date);

  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {countries.getName(data.firstTeamCountryCode, "pt")} vs.{" "}
        {countries.getName(data.secondTeamCountryCode, "pt")}
      </Text>

      <Text color="gray.200" fontSize="xs">
        {when}
      </Text>

      <HStack
        mt={4}
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Team
          code={data.firstTeamCountryCode}
          point={data.guess ? data.guess.firstTeamPoints : 0}
          position="right"
          onChangeText={setFirstTeamPoints}
        />

        <X color={colors.gray[300]} size={sizes[6]} />

        <Team
          code={data.secondTeamCountryCode}
          point={data.guess ? data.guess.secondTeamPoints : 0}
          position="left"
          onChangeText={setSecondTeamPoints}
        />
      </HStack>

      {!data.guess && (
        <Button
          size="xs"
          w="full"
          bgColor="green.500"
          mt={4}
          onPress={onGuessConfirm}
          isDisabled={disabled}
          _disabled={{
            bgColor: "gray.600",
          }}
        >
          <HStack alignItems="center">
            {disabled ? (
              <>
                <Text
                  color={"gray.300"}
                  textTransform="uppercase"
                  fontSize="xs"
                  fontFamily="heading"
                  mr={3}
                >
                  Tempo Esgotado
                </Text>
              </>
            ) : (
              <>
                <Text
                  color={"white"}
                  textTransform="uppercase"
                  fontSize="xs"
                  fontFamily="heading"
                  mr={3}
                >
                  Confirmar Palpite
                </Text>

                <Check color={colors.white} size={sizes[4]} />
              </>
            )}
          </HStack>
        </Button>
      )}
    </VStack>
  );
}
