'use client';
import React, { useState, useReducer, useEffect, useRef } from 'react';

// 父级state发生变化不会重新渲染
const Child = React.memo(() => {
  console.log('child');
  return <div>child</div>;
});
Child.displayName = 'Child';
export default function Home() {
  const id = 'iddd';
  const cls = 'aa bn ccc';
  const style = {
    color: '#fff',
  };
  const [num, setNum] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);
  const [str, setStr] = useState('test');
  const [obj, setObj] = useState(() => {
    return {
      name: 'name',
      age: 18,
    };
  });
  const r_obj = {
    name: 'name',
    age: 18,
  };
  type RObj = typeof r_obj;
  const reducer = (state: RObj, action: { name: string; id: number }) => {
    state = {
      ...state,
      name: action.name + action.id,
    };
    return state;
  };
  const initVal = () => {
    return {
      name: 'name111',
      age: 18,
    };
  };
  const [data, setData] = useReducer(reducer, r_obj, initVal);
  const fn = <T,>(_num: T) =>
    function () {
      console.log(_num);
      setStr('test2');
      const newArr = arr.reverse();
      setArr(newArr);
      setObj({ ...obj, name: 'name2' });
      setNum((prev) => prev + 1);
      setNum((prev) => prev + 1);
    };
  const rFn = () => {
    setData({ name: 'zhang', id: 123 });
  };
  // useEffect
  // 第二个参数 [num,data,obj] 改变时，会重新执行 useEffect, 支持多个值, 像 watch
  // 空数组是 moonted  生命周期
  // 可变种多个生命周期
  const domRef = useRef<HTMLDivElement | null>(null); // ✅ Moved to top level

  useEffect(() => {
    console.log(domRef.current);
  }, []);

  return (
    <>
      <div ref={domRef}>-----------useState-----------</div>
      <h1 style={style} id={id} className={`${cls} cursor-pointer`} onClick={fn('32132AA1')}>
        {num.toFixed(2)}
      </h1>
      <div>{str}</div>
      <div>{arr}</div>
      <div>{obj.name}</div>
      <div>{obj.age}</div>
      <div>-----------useReducer-----------</div>
      <button onClick={rFn}>change</button>
      <div>name: {data.name}</div>
      <div>name: {data.age}</div>
      {num > 0 && <Child />}
    </>
  );
}

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{' '}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
