export interface SmartHouseCommand {
  execute(): void;
  undo(): void;
}
