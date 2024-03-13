from datetime import datetime

from sqlalchemy import Column, BigInteger, DateTime, ForeignKey

from config.database import Base

class ViewLog(Base):
    __tablename__ = 'view_logs'

    view_log_id = Column(BigInteger, primary_key=True, autoincrement=True, nullable=False)
    live_id = Column(BigInteger, ForeignKey('lives.live_id'), nullable=False)
    live_log_id = Column(BigInteger, ForeignKey('live_logs.live_log_id'), nullable=False)
    member_id = Column(BigInteger, ForeignKey('members.member_id'), nullable=False)
    req_dt = Column(DateTime, nullable=False, default= datetime.today())