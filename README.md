# 👽 Rick and Morty
## Stack:
- React/Next.js
- Typescript
- Scss modules
- headless ui
----

## Функционал:
1. В навигационной панели добавлены активные ссылки на другие страницы. Также на ссылки добавлен эффект :hover
2. В блоке с поиском и фильтрами использовались **Combobox** и **Select** из UI библиотеки headless ui. В этих компонентах реализована автоподстановка и выбор значения из списка. Для создания списков для этих компонентов были созданы массивы в файле `constants/index.ts` и далее выведены при помощи метода `map()`.
3. Для всех страниц используется разметка из `layout.tsx`, в котором лежат компоненты `Navbar.tsx` и `Footer.tsx`

## Комментарии для тех. lead'a

Я за выходные сделал адаптив, и сверстал еще пару страниц. Но я все-равно не успел сделать все ;( <br>
И еще почему-то при деплое на vercel моего последнего коммита не принимаются стили для текста в некоторых местах, хотя при локальном запуске все с этим нормально.
