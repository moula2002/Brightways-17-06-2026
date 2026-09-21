import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Complaint2 = () => {


  return (
    <div className="cb-wrap" style={{
      fontFamily: "'Open Sans', Arial, sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      padding: '0',
      margin: '0'
    }}>
      {/* SECTION 1 — Monthly complaint summary */}
      <div style={{ marginBottom: '48px' }}>
        <h2 id="cb-h2-monthly" style={{
          color: '#003366',
          fontSize: '1.4em',
          fontWeight: '700',
          margin: '0 0 6px 0'
        }}>
          Data for the Month Ending – May 2026
        </h2>

        <div style={{ overflowX: 'auto' }}
             role="region"
             aria-labelledby="cb-cap1"
             tabIndex="0">
          <table style={{
            width: '100%',
            minWidth: '580px',
            borderCollapse: 'collapse',
            marginTop: '8px'
          }}>
            <caption id="cb-cap1" style={{
              textAlign: 'left',
              fontSize: '0.875em',
              fontWeight: '600',
              color: '#003366',
              paddingBottom: '6px',
              captionSide: 'top'
            }}>
              Monthly complaint status and resolution summary
            </caption>
            <thead>
              <tr>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Sr. No.</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Received From</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Pending at End of Last Month</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Received</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Resolved</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Total Pending</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Pending Complaints &gt; 3 Months</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Average Resolution Time (in days)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f5f8ff' }}>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>1</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>Directly from Investors</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>N.A.</td>
              </tr>
              <tr>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>2</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>SEBI (SCORES)</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>Within 30 Days</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f8ff' }}>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>3</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>Other Sources (if any)</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>N.A.</td>
              </tr>
              <tr className="cb-total" style={{ backgroundColor: '#e8eef7' }}>
                <th scope="row" colSpan="2" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>Grand Total</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>N.A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2 — Monthly trend */}
      <div style={{ marginBottom: '48px' }}>
        <h3 id="cb-h3-trend-monthly" style={{
          color: '#003366',
          fontSize: '1.15em',
          fontWeight: '600',
          margin: '0 0 6px 0'
        }}>
          Trend of Monthly Disposal of Complaints
        </h3>

        <div style={{ overflowX: 'auto' }}
             role="region"
             aria-labelledby="cb-cap2"
             tabIndex="0">
          <table style={{
            width: '100%',
            minWidth: '580px',
            borderCollapse: 'collapse',
            marginTop: '8px'
          }}>
            <caption id="cb-cap2" style={{
              textAlign: 'left',
              fontSize: '0.875em',
              fontWeight: '600',
              color: '#003366',
              paddingBottom: '6px',
              captionSide: 'top'
            }}>
              Month-wise complaint receipt, resolution and pending status
            </caption>
            <thead>
              <tr>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>S. No.</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Month</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Carried Forward</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Received</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Resolved</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>1</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>May, 2026</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f8ff' }}>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>2</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>April, 2026</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>3</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>March, 2026</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f8ff' }}>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>4</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>Previous Monthly Complaints for this FY 2025-26</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>1</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr style={{ backgroundColor: '#e8eef7', fontWeight: '700' }}>
                <th scope="row" colSpan="2" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>Grand Total</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>2</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>2</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3 — Annual trend */}
      <div style={{ marginBottom: '48px' }}>
        <h3 id="cb-h3-trend-annual" style={{
          color: '#003366',
          fontSize: '1.15em',
          fontWeight: '600',
          margin: '0 0 6px 0'
        }}>
          Trend of Annual Disposal of Complaints
        </h3>

        <div style={{ overflowX: 'auto' }}
             role="region"
             aria-labelledby="cb-cap3"
             tabIndex="0">
          <table style={{
            width: '100%',
            minWidth: '580px',
            borderCollapse: 'collapse',
            marginTop: '8px'
          }}>
            <caption id="cb-cap3" style={{
              textAlign: 'left',
              fontSize: '0.875em',
              fontWeight: '600',
              color: '#003366',
              paddingBottom: '6px',
              captionSide: 'top'
            }}>
              Year-wise complaint disposal and pending summary
            </caption>
            <thead>
              <tr>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Sr. No.</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Year</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Carried Forward</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Received</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Resolved</th>
                <th scope="col" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f5f8ff' }}>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>1</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>2024-25</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>2</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>2</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr>
                <th scope="row" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  backgroundColor: '#e8eef7',
                  color: '#003366',
                  fontWeight: '600'
                }}>2</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>2025-26</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>3</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>3</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4'
                }}>0</td>
              </tr>
              <tr style={{ backgroundColor: '#e8eef7', fontWeight: '700' }}>
                <th scope="row" colSpan="2" style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>Grand Total</th>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>5</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>5</td>
                <td style={{
                  border: '1px solid #767676',
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.4',
                  fontWeight: '700',
                  color: '#003366'
                }}>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Complaint2;
