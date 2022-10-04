export default function Sidebar() {
  return (
    <nav class="w-[10rem] flex-shrink-0 py-8 pr-4 border(r-2 gray-100)">
    <ol class="list-decimal list-inside font-semibold nested">
      <li class="my-0.5">
        <a href="/">Home</a>
      </li>
      <li class="my-0.5">
        <a href="/fresh">Fresh</a>
      </li>
      <li class="my-0.5">
        <a href="/markdoc">Markdoc</a>
      </li>
    </ol>
    </nav>
  )
}
