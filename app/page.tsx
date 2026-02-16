import { SlotMachine } from "@/app/components/SlotMachine";

import Header from "./components/Home/Header";
import Background from "./components/Home/Background";
import Decorations from "./components/Home/Decorations";
import { BetControls } from "./components/BetControls";
import { SpinButton } from "./components/SpinButton";
import { Balance } from "./components/Balance";

export default function HomePage() {
  return (
    <>
      <div className="bg-background">
        <Header />
        <SlotMachine />
        <BetControls />
        <SpinButton />
        <Decorations />
        <Balance />
        <Background />
      </div>
    </>
  );
}