
export default function Myreading() {
  return (
    <div className="flex min-h-screen overflow-hidden justify-between gap-5">
        <div className="w-1/4 flex flex-col gap-5 p-4 text-start">
            <div className="flex flex-col gap-2">
                <p>Start page:</p>
                <input type="text" />
            </div>
            <button className="p-3 border  border-slate-400 text-white self-start">To Start</button>
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl">Progress</h2>
                <p className="text-slate-500 ">Here you will see when and how much you read. 
To record, click on the red button above.</p>
            </div>
            <p>yıldız</p>
        </div>
        <div className="w-3/4 p-4">
            <h2 className="text-white text-2xl font-semibold text-start">My reading</h2>
            <div className="flex flex-col items-center gap-3">
                <p>img</p>
                <p>baslık</p>
                <p>yazar </p>
                <button type="button">kırmızı</button>
            </div>
        </div>
    </div>
  )
}
