// import { useNavigation, useRoute } from "@react-navigation/native";
// import CustomIcon from "Components/CustomIcon";
// import CustomImage from "Components/CustomImage";
// import CustomRow from "Components/CustomRow";
// import CustomText from "Components/CustomText";
// import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function () {
//   const { params } = useRoute();
//   const navigation = useNavigation();

//   console.log("params", params.state.productImages);
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
//       <CustomRow
//         v_center
//         style={{
//           marginTop: 20,
//           marginHorizontal: 10,
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.goBack();
//           }}
//         >
//           <CustomIcon name={"chevron-small-left"} type={"ENT"} size={33} />
//         </TouchableOpacity>
//         <CustomText bold size={24} value={"Product Screen"} />
//       </CustomRow>

//       <View>
//         <ScrollView
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           pagingEnabled
//         >
//           {params?.state?.productImages.map((item, index) => {
//             return (
//               <View
//                 style={{
//                   marginHorizontal: 10,
//                   marginTop: 30,
//                 }}
//               >
//                 <CustomImage
//                   style={{
//                     borderRadius: 10,
//                     width: Dimensions.get("screen").width - 20,
//                   }}
//                   size={200}
//                   src={{ uri: item.mediaUrl }}
//                 />
//               </View>
//             );
//           })}
//         </ScrollView>
//         {/* <CustomImage src={} /> */}
//       </View>
//     </SafeAreaView>
//   );
// }
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "Components/CustomButton";
import CustomIcon from "Components/CustomIcon";
import CustomImage from "Components/CustomImage";
import CustomRow from "Components/CustomRow";
import CustomText from "Components/CustomText";
import React, { useRef } from "react";
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { SafeAreaView } from "react-native-safe-area-context";
import Routes from "RootNavigation/Routes";

export default function () {
  const { params } = useRoute();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get("screen").width;
  const productImages = params?.state?.productImages || [];
  let currentIndex = 0;

  const scrollToImage = (direction) => {
    if (direction === "next" && currentIndex < productImages.length - 1) {
      currentIndex++;
    } else if (direction === "prev" && currentIndex > 0) {
      currentIndex--;
    }
    scrollViewRef.current?.scrollTo({
      x: currentIndex * screenWidth,
      animated: true,
    });
  };

  console.log("params?.state", params?.state);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <CustomRow v_center style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomIcon name="chevron-small-left" type="ENT" size={33} />
          </TouchableOpacity>
          <CustomText bold size={24} value="Product Screen" />
        </CustomRow>

        {/* Image Slider */}
        <View style={styles.scrollViewContainer}>
          <ScrollView
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
          >
            {productImages.map((item, index) => (
              <View key={index} style={styles.imageContainer}>
                <CustomImage
                  style={styles.image}
                  size={200}
                  src={{ uri: item.mediaUrl }}
                />
              </View>
            ))}
          </ScrollView>

          {productImages?.length > 1 && (
            <View style={styles.buttonOverlay}>
              <TouchableOpacity
                onPress={() => scrollToImage("prev")}
                style={styles.button}
              >
                <CustomIcon name={"left"} type={"AN"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => scrollToImage("next")}
                style={styles.button}
              >
                <CustomIcon name={"right"} type={"AN"} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <CustomRow
          ratios={[1, 0]}
          v_center
          style={{
            marginHorizontal: 10,
          }}
        >
          <CustomText bold size={18} value={params?.state?.productName} />
          <CustomText size={16} bold value={"₹ " + params?.state?.lowerPrice} />
        </CustomRow>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <RenderHTML
            contentWidth={Dimensions.get("screen") - 20}
            source={{ html: params?.state?.productDescription }}
          />
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
        }}
      >
        <CustomButton
          onPress={() => {
            navigation.navigate(Routes.OtpScreen, { number: 1234567890 });
          }}
          style={{
            width: "90%",
            marginTop: 50,
          }}
          title={"Add To Cart"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  scrollViewContainer: {
    // flex: 1,
    position: "relative", // Needed for absolute positioning of buttons
    height: 250,
  },
  imageContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  image: {
    borderRadius: 10,
    width: Dimensions.get("screen").width - 20,
  },
  buttonOverlay: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    transform: [{ translateY: -20 }], // Adjust the vertical position slightly
  },
  button: {
    backgroundColor: "#b2e060",
    borderRadius: 20,
    padding: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
