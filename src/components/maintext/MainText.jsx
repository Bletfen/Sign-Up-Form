export default function MainText() {
  return (
    <div className="flex flex-col text-center gap-[1.6rem] max-w-[54rem] xl:text-start">
      <h1
        className="text-white text-[2.8rem] 
        font-bold leading-[3.6rem]
        tracking-[-0.292px]
        xl:text-[5rem] xl:leading-[5.5rem] xl:tracking-[-0.521px]"
      >
        Learn to code by watching others
      </h1>
      <p
        className="text-white text-[1.6rem]
        font-medium leading-[2.6rem]
        mb-[6.4rem]"
      >
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}
