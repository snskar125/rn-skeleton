import { memo, useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
const Skeleton = memo((props) => {
  const { style, ...rest } = props;
  const opacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.25,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return animation.stop;
  }, []);
  return (
    <Animated.View style={[styles.skeleton, style, { opacity }]} {...rest} />
  );
});
const styles = StyleSheet.create({
  skeleton: {
    height: 50,
    width: 250,
    borderRadius: 5,
    backgroundColor: "#CCC",
  },
});
Skeleton.defaultProps = {
  style: {},
};
export default Skeleton;
