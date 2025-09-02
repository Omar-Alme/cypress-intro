import { db } from "@/prisma/db";
import TodoList from "./ui/todo-list";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="p-4 bg-blue-900">
      <TodoList defaultTodos={todos} />
      <h1 className="text-3xl bg-amber-600">Test CI</h1>
    </main>
  );
}
