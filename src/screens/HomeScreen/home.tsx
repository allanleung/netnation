import PaperCard from "@/src/components/PaperCard/PaperCard";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HomeImage from "../../../assets/images/home.png";
import SolutionImage from "../../../assets/images/solutions.png";
import CustomerServiceImage from "../../../assets/images/customer-service.png";
import IntegrationImage from "../../../assets/images/integration.png";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <PaperCard
          title="Sell More, Spend Less"
          content="Partner with NetNation to expand your value-added services portfolio and offer the solutions your small business customers crave. Our white-labeled services help you increase average revenue per user, reduce churn, mitigate risk and boost your customer retention rates."
          imageSource={HomeImage}
          imageHeight={220}
          actionLabel="Learn More"
          onPressAction={() => console.log("Action pressed")}
        />
        <PaperCard
          title="GTM Solutions"
          content="Go-to-market expertise on product positioning, bundling, pricing, market segmentation, road mapping, sales and marketing, and execution."
          imageSource={SolutionImage}
          imageHeight={220}
          actionLabel="Learn More"
          onPressAction={() => console.log("Action pressed")}
        />
        <PaperCard
          title="Integeation"
          content="The most important element of any white-labelled partnership is integration – both technical integration as well as brand integration. Our clients spend a lot of time, money and effort in building their brand. We help to build upon that good name by offering seamless service management workflows and provisioning within billing and account management systems, simultaneously delighting your customers and securing future renewals and referrals. "
          imageSource={IntegrationImage}
          imageHeight={220}
          actionLabel="Learn More"
          onPressAction={() => console.log("Action pressed")}
        />
        <PaperCard
          title="Customer Support"
          content="Our service experts transform each customer interaction into a positive brand experience. Our white-labeled support services identify the root cause of a customer’s issues through a dynamic combination of subject matter mastery and intelligent troubleshooting. Not only will we provide a seamless support experience for your brand, but we’ll also help you increase your brand loyalty."
          imageSource={CustomerServiceImage}
          imageHeight={220}
          actionLabel="Learn More"
          onPressAction={() => console.log("Action pressed")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
