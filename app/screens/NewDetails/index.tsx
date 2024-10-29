import { getNews } from "@/app/service/api/news/news.api";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { news } from "../News";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 360,
    height: 160,
  },

  title: {
    fontSize: 18,
  },
});

const NewDetail = ({ navigation, route }: { navigation: any; route: any }) => {
  console.log(route);
  const data: news = route.params?.data;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            backgroundColor: "#fff",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}>{data?.title}</Text>

          <Image
            style={styles.logo}
            source={{
              uri: data?.urlToImage,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{data?.author ?? "Not updated yet"}</Text>
            <Text>{data?.publishedAt}</Text>
          </View>
          <Text style={styles.title}>{data?.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewDetail;
