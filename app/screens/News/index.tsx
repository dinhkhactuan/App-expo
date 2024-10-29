import { getNews } from "@/app/service/api/news/news.api";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface news {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 340,
    height: 160,
  },

  title: {
    fontSize: 18,
  },
});

const News = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<news[]>([]);

  useEffect(() => {
    (async () => {
      const respone = await getNews();
      setData(respone?.data?.articles);
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => {
          return (
            <View
              style={{
                flexDirection: "column",
                borderRadius: 10,
                gap: 10,
                backgroundColor: "#fff",
                padding: 16,
                marginBottom: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NewDetail", { data: item });
                }}
              >
                <Image
                  style={styles.logo}
                  source={{
                    uri: item.urlToImage,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.author ?? "Not updated yet"}</Text>
                  <Text>{item.publishedAt}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default News;
