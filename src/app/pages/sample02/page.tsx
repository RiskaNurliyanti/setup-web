export default function Page(){
    return (
        <>
          <div className="grouped fields">
    <label>Outbound Throughput</label>
    <div className="field">
      <div className="ui slider checkbox">
        <input type="radio" name="throughput"/>
        <label>20 mbps max</label>
      </div>
    </div>
    <div className="field">
      <div className="ui slider checkbox">
        <input type="radio" name="throughput"/>
        <label>10mbps max</label>
      </div>
    </div>
    <div className="field">
      <div className="ui slider checkbox">
        <input type="radio" name="throughput"/>
        <label>5mbps max</label>
      </div>
    </div>
    <div className="field">
      <div className="ui slider checkbox checked">
        <input type="radio" name="throughput"/>
        <label>Unmetered</label>
      </div>
    </div>
  </div>
        </>
    );
    
}