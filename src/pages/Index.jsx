import { Heading, Center, Stack, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Center>
      <Stack spacing={8}>
        <Heading>Welcome to my website!</Heading>

        <Stack spacing={4}>
          <Heading size="lg">Liar's Dice Rules</Heading>
          <UnorderedList>
            <ListItem>You and the computer each start with 4 dice and a cup</ListItem>
            <ListItem>Players simultaneously roll their dice and hide the results</ListItem>
            <ListItem>Starting with the player, each player bids on the total number of a given face value that were rolled by both players</ListItem>
            <ListItem>Bids must be higher in quantity than the previous bid for the same face value</ListItem>
            <ListItem>Bids must increase the face value to raise the quantity</ListItem>
            <ListItem>A player can challenge the previous bid if they think it's too high</ListItem>
            <ListItem>If the challenger is right, the bidder loses a die. If wrong, the challenger loses a die.</ListItem>
            <ListItem>The round ends when a challenge occurs. A new round begins with remaining dice.</ListItem>
            <ListItem>The last player with dice remaining wins!</ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Index;
