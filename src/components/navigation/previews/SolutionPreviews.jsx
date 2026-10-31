import React from 'react';

export function EnterprisePreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0A0C10',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '4px 10px', borderRadius: '12px', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#38BDF8' }}>Enterprise Grade</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
          Zero Data Retention & Dedicated VPC
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          Deploy inside your AWS, Azure, or GCP infrastructure. Devin never trains on your proprietary codebase.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
      }}>
        <div style={{ backgroundColor: '#141720', borderRadius: '8px', padding: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '11px', color: '#64748B' }}>COMPLIANCE</div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#10B981', marginTop: '2px' }}>SOC2 Type II</div>
        </div>
        <div style={{ backgroundColor: '#141720', borderRadius: '8px', padding: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '11px', color: '#64748B' }}>IDENTITY</div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#38BDF8', marginTop: '2px' }}>Okta & SAML 2.0</div>
        </div>
      </div>
    </div>
  );
}

export function StartupsPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0A0C10',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '4px 10px', borderRadius: '12px', marginBottom: '14px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#10B981' }}>10x Velocity</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
          Build Fast, Ship Daily
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          Outsource routine bugs, migrations, and test backlogs to autonomous agents while you focus on core product.
        </p>
      </div>

      <div style={{
        backgroundColor: '#141720',
        borderRadius: '10px',
        padding: '12px 14px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: '11px', color: '#64748B' }}>AVERAGE CYCLE TIME</div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>4.2 mins / PR</div>
        </div>
        <div style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>↑ 82% faster</div>
      </div>
    </div>
  );
}

export function FintechPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0A0C10',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', padding: '4px 10px', borderRadius: '12px', marginBottom: '14px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#F59E0B' }}>Banking & FinTech</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
          Deterministic Sandbox Execution
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          Rigorous compliance guardrails, PCI-DSS auditing, and immutable trace logs for financial ledger services.
        </p>
      </div>

      <div style={{
        backgroundColor: '#141720',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid rgba(255,255,255,0.06)',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#94A3B8',
      }}>
        <div><span style={{ color: '#10B981' }}>✓</span> Ledger reconciliation: 0 discrepancies</div>
        <div><span style={{ color: '#10B981' }}>✓</span> Cryptographic proof verified</div>
      </div>
    </div>
  );
}

export function SupportPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0A0C10',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(192, 132, 252, 0.12)', border: '1px solid rgba(192, 132, 252, 0.25)', padding: '4px 10px', borderRadius: '12px', marginBottom: '14px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#C084FC' }}>Support Automation</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
          Customer Ticket to Pull Request
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          Devin consumes Zendesk and GitHub issues, writes reproduction tests in a browser, and delivers fixes.
        </p>
      </div>

      <div style={{
        backgroundColor: '#141720',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '12px', color: '#E2E8F0' }}>Zendesk Ticket #1042</span>
        <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>Resolved with PR ✓</span>
      </div>
    </div>
  );
}

export function SecurityPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0A0C10',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)', padding: '4px 10px', borderRadius: '12px', marginBottom: '14px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#EF4444' }}>Continuous SecOps</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
          Automated Vulnerability Patching
        </div>
        <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          Continuous scanning of dependencies and zero-day alerts with automated PR patches before exploits occur.
        </p>
      </div>

      <div style={{
        backgroundColor: '#141720',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '12px', color: '#E2E8F0' }}>CVE-2026-4819 Audit</span>
        <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>Auto-Patched ✓</span>
      </div>
    </div>
  );
}
