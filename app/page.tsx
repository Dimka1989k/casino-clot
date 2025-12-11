"use client";

import { SlotMachine } from "@/app/components/SlotMachine";

import Header from "./components/Home/Header";
import Background from "./components/Home/Background";
import Decorations from "./components/Home/Decorations";
import { useSlotLogic } from "./hooks/useSlotLogic";
import { BetControls } from "./components/BetControls";
import { SpinButton } from "./components/SpinButton";
import { Balance } from "./components/Balance";

export default function HomePage() {
  const { reels, isSpinning, gameResult, modalVisible, notifyReelStopped } =
    useSlotLogic();

  return (
    <div className="bg-background">
      <Header />
      <SlotMachine />
      <BetControls />
      <SpinButton />
      <Decorations />
      <Balance />
      <Background />
    </div>
  );
}
