import isMain from "../...js";

if (isMain(import.meta)) {
  console.log("is main");
}
