import { db } from "@/prisma/db";
import TodoList from "./ui/todo-list";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="p-4 bg-blue-900">
      <TodoList defaultTodos={todos} />
      <h1 className="text-3xl bg-amber-600">Test CI</h1>
      <h1 className="text-3xl bg-amber-600">Test CI 2</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Card Title</h2>
        <p className="text-gray-700">Card content goes here.</p>
      </div>
    </main>
  );
}
