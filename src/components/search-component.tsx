"use client";
import { Search } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";

export function SearchToggle({
  onChange,
}: {
  onChange?: (state: boolean) => void;
}) {
  return (
    <Toggle
      variant="outline"
      aria-label="Toggle search"
      className="data-[state=on]:bg-blue-500 cursor-pointer data-[state=on]:text-white hover:bg-blue-400 hover:text-white transition-colors"
      onPressedChange={onChange}
    >
      <Search className="h-[1.2rem] w-[1.2rem]" />
    </Toggle>
  );
}

type SearchKosakataProps = {
  visible: boolean;
  onSelect: (value: string) => void;
};


export function SearchKosakata({ visible, onSelect }: SearchKosakataProps) {
  const [query, setQuery] = useState("");

  const handleSelect = (value: string) => {
    onSelect(value);
    setQuery("");
  };

  return (
    <div className="relative w-full">
      <Command className="rounded-lg p-2 outline-none shadow-11 w-full">
        <CommandInput
          placeholder="Cari Kosakata..."
          onValueChange={(val) => setQuery(val)}
          className="outline-none"
        />

        {query.trim().length > 0 && (
          <CommandList className="absolute top-full left-0 mt-2 w-full rounded-lg border bg-white shadow-lg z-50">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Suggestions">
              <CommandItem value="Calendar" onSelect={handleSelect}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem value="Emoji" onSelect={handleSelect}>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem value="Calculator" onSelect={handleSelect} disabled>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Settings">
              <CommandItem value="Profile" onSelect={handleSelect}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem value="Billing" onSelect={handleSelect}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem value="Settings" onSelect={handleSelect}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
