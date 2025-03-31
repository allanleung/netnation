import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

interface PaperCardProps {
  title: string;
  content: string;
  imageSource: { uri: string } | number;
  imageHeight?: number;
  onPressAction?: () => void;
  actionLabel?: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title,
  content,
  imageSource,
  imageHeight = 180,
  onPressAction,
  actionLabel = "Action",
}) => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={imageSource}
        style={[styles.cover, { height: imageHeight }]}
      />
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPressAction}>{actionLabel}</Button>
      </Card.Actions>
    </Card>
  );
};

export default PaperCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  cover: {
    width: "100%",
  },
});
