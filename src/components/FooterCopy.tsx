export default function FooterCopy() {
    const date = new Date;

    return (
        <div className="text-slate-500 text-xs font-medium">
            &copy; {`${date.getFullYear()} Luna UI. All rights reserved`}
        </div>
    );
}