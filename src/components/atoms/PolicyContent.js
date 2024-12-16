import { Box, Text, OrderedList, ListItem, Divider } from "@chakra-ui/react";
import Dividers from "./Dividers";

export default function PolicyContent({ item }) {
  return (
    <Box mb={20}>
      <Text fontWeight="bold" fontSize="xl">
        {item.title}
      </Text>
      <br />
      {item.describe && (
        <Text fontSize="lg" mt={2}>
          {item.describe}
        </Text>
      )}
      {item.descriptionLines &&
        item.descriptionLines.map((line, index) => (
          <Text key={index} fontSize="lg" mt={2}>
            {line}
          </Text>
        ))}
      {item.describe4 && (
        <Text fontSize="lg" mt={2}>
          {item.describe4}
        </Text>
      )}
      <br />
      <OrderedList spacing={3} fontSize="lg" pl={4}>
        {item.contents.map((content) => (
          <ListItem key={content.id} display="flex" flexDirection="column">
            {content.id + ". "}
            {content.content}
            <OrderedList pl={8} fontSize="md">
              {content.subContent.map((sub) => (
                <ListItem key={sub.id}>{sub.content}</ListItem>
              ))}
            </OrderedList>
            <br />
          </ListItem>
        ))}
      </OrderedList>
      {item.link && (
        <>
          <Text fontSize="lg" mt={4}>
            {item.describe2}
          </Text>
          <br />
          <Text fontSize="lg" mt={2}>
            {item.describe3}
          </Text>
        </>
      )}
      {item.id !== 19 && item.type !== "email" && item.last !== true ? (
        <Dividers />
      ) : null}
    </Box>
  );
}
